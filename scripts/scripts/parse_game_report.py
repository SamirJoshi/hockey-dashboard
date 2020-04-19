from html.parser import HTMLParser
from bs4 import BeautifulSoup
from pprint import pprint
import json

with open('../proof_data/game_report.html') as f:
    read_data = f.read()

soup = BeautifulSoup(read_data, 'html.parser')
a = soup.findAll('tr', attrs={"class": ["oddColor", "evenColor"] })

def parse_row(row, fenwick_map_away, fenwick_map_home):
    event = row.findChildren('td')[4].getText()
    if event == 'SHOT' or event == 'MISS' or event == 'GOAL':
        away_players_table = row.findChildren('td', recursive=False)[6].find('table')
        away_player_numbers = find_players_from_table(away_players_table)
        home_players_table = row.findChildren('td', recursive=False)[7].find('table')
        home_player_numbers = find_players_from_table(home_players_table)

        is_home_fenwick_event = row.findChildren('td')[5].getText().find('CHI') != -1

        for number in away_player_numbers:
            if is_home_fenwick_event:
                if number in fenwick_map_away:
                    fenwick_map_away[number]['FA'] += 1
                else:
                    fenwick_map_away[number] = { 'FA': 1, 'FF': 0 }
            else:
                if number in fenwick_map_away:
                    fenwick_map_away[number]['FF'] += 1
                else:
                    fenwick_map_away[number] = { 'FF': 1, 'FA': 0 }

        for number in home_player_numbers:
            if not is_home_fenwick_event:
                if number in fenwick_map_home:
                    fenwick_map_home[number]['FA'] += 1
                else:
                    fenwick_map_home[number] = { 'FA': 1, 'FF': 0 }
            else:
                if number in fenwick_map_home:
                    fenwick_map_home[number]['FF'] += 1
                else:
                    fenwick_map_home[number] = { 'FF': 1, 'FA': 0 }
        
        if is_home_fenwick_event:
            return [0, 1]
        else:
            return [1, 0]

    return [0, 0]

def find_players_from_table(player_table):
    player_numbers = []
    for child in player_table.find('tr').findChildren('td', recursive=False):
        if child.find('table'):
            player_numbers.append(child.find('table').findAll('tr')[0].find('td').find('font').getText())
    print(player_numbers)
    return player_numbers

def runner():
    fenwick_map_away = {}
    fenwick_map_home = {}

    fenwick_events_away = 0
    fenwick_events_home = 0
    
    for row in a:
        [away_fenwick_inc, home_fenwick_inc] = parse_row(row, fenwick_map_away, fenwick_map_home)
        fenwick_events_away += away_fenwick_inc
        fenwick_events_home += home_fenwick_inc

    print(fenwick_events_away)
    print(fenwick_events_home)

    for player in fenwick_map_away:
        fenwick_map_away[player]['fenwick'] = fenwick_map_away[player]['FF'] - fenwick_map_away[player]['FA']
        fenwick_map_away[player]['FF_perc_on'] = fenwick_map_away[player]['FF'] / (fenwick_map_away[player]['FF'] + fenwick_map_away[player]['FA'])
        ff_off = fenwick_events_away - fenwick_map_away[player]['FF']
        fa_off = fenwick_events_home - fenwick_map_away[player]['FA']
        fenwick_map_away[player]['FF_perc_off'] = ff_off / (ff_off + fa_off)
        if (ff_off == 0 and fa_off == 0):
            fenwick_map_away[player]['FF_perc_off'] = fenwick_map_away[player]['FF_perc_on']
        else:
            fenwick_map_away[player]['FF_perc_off'] = ff_off / (ff_off + fa_off)

        fenwick_map_away[player]['FF_perc_relative'] = fenwick_map_away[player]['FF_perc_on'] - fenwick_map_away[player]['FF_perc_off']
        

    for player in fenwick_map_home:
        fenwick_map_home[player]['fenwick'] = fenwick_map_home[player]['FF'] - fenwick_map_home[player]['FA']
        fenwick_map_home[player]['FF_perc_on'] = (fenwick_map_home[player]['FF'] / (fenwick_map_home[player]['FF'] + fenwick_map_home[player]['FA']))
        ff_off = fenwick_events_home - fenwick_map_home[player]['FF']
        fa_off = fenwick_events_away - fenwick_map_home[player]['FA']
        if (ff_off == 0 and fa_off == 0):
            fenwick_map_home[player]['FF_perc_off'] = fenwick_map_home[player]['FF_perc_on']
        else:
            fenwick_map_home[player]['FF_perc_off'] = ff_off / (ff_off + fa_off)

        fenwick_map_home[player]['FF_perc_relative'] = fenwick_map_home[player]['FF_perc_on'] - fenwick_map_home[player]['FF_perc_off']

    pprint(fenwick_map_away)
    pprint(fenwick_map_home)


    with open('data.json', 'w') as outfile:
        json.dump({ "away": fenwick_map_away, "home": fenwick_map_home }, outfile)


runner()