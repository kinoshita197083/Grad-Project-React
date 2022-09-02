#############################################################################################################################################
# This module is used to load modify and wrangle the raw monkeypox database into desired output                                             
# This function will extract raw data from the following github repo: 
# https://raw.githubusercontent.com/globaldothealth/monkeypox/main/latest.csv
# This module aims to perform the following functionality:
# - Load the raw data into an appropriate dataframe
# - Wrangle the data
# - Generate aggregated columns base off raw data (under construction)
# - Split and save the data into different csv files for schema upload
#############################################################################################################################################

# IMPORTS ALL MODULES
import time
import numpy as np
import pandas as pd
import pycountry as pc

from datetime import datetime, timedelta


import plotly.express as px
import matplotlib.pyplot as plt
import plotly.graph_objects as go

# FUNCTION TO LOAD THE DATA:

def load_data():
    # Extracts todays date
    today = datetime.today()
    day   = today.day if today.day > 9 else '0' + str(today.day)
    month = today.month if today.month > 9 else '0' + str(today.month)
    today_str = '{}/{}/{}'.format(day, month, today.year)
    
    # Fetch data
    monkeypox_df = pd.read_csv("https://raw.githubusercontent.com/globaldothealth/monkeypox/main/latest.csv")
    monkeypox_df['Gender'] = monkeypox_df['Gender'].str.strip().str.capitalize()
    monkeypox_df['Confirmation_method'] = monkeypox_df['Confirmation_method'].str.replace('"','')

    monkeypox_df.to_csv('monkeypox_df.csv', index = False)
    
    # Omits all rows which are errors
    monkeypox_df = monkeypox_df[monkeypox_df.Status != 'omit_error']
    return monkeypox_df

# FUNCTION TO WRANGLE THE DATA
def wrangle(df):
    mod_df = df.copy()
    return mod_df

# FUNCTION TO ANALYSE THE SYNTOMS COMMONLY EXPERIENCED BY CASES WHICH HAVE BEEN CLASSIFIED
def symptoms(df):
    symp_df = df.copy()
    return symp_df

# FUNCTION TO SPLIT INITIAL DF INTO APPRORPIATE TABLES FOR SQL UPLOAD
def sql_ready(df, num_tabs, tab_label):

    return 
