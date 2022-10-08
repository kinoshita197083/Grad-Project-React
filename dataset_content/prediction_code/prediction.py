#!/usr/bin/env python
# coding: utf-8

# In[1]:


def prediction():
    vic_aug = pd.read_csv("https://raw.githubusercontent.com/owid/monkeypox/main/owid-monkeypox-data.csv") # reading the file
    vic_aug=vic_aug.query('location=="Australia"') #filtering for australia
    vic_aug=vic_aug.reset_index() #reseting index
    vic_aug = vic_aug[['date', 'new_cases_smoothed']] #subselection of attributes
    EndDate = date.today() + timedelta(days=5)#getting the days from current datetime
    sdate=vic_aug.iloc[0,:]['date']#getting the start date
    sdate=datetime.datetime.strptime(sdate,'%Y-%m-%d').date()#converting to datetime format
    time_range=pd.date_range(sdate,EndDate-timedelta(days=1),freq='d')#retrieving the dates 
    time_range=time_range.to_frame(index=False, name='date') #converting it to a dataframe
    time_range['date']=time_range['date'].astype(str) #Converting to string datatype
    merged_df=pd.merge(time_range,vic_aug,on='date',how='left') #left joining
    merged_df["new_cases_smoothed"].fillna(0, inplace=True)#replacing predicted values to initially 0
    step_fit=auto_arima(merged_df['new_cases_smoothed'],trace=True,suppress_warnings=True) #stepwise function for auto arima
    model = ARIMA(merged_df.new_cases_smoothed, order=step_fit.get_params().get("order")) # fetching the best parameters
    #model=ARIMA(train[''],order=(3,1,0))
    model=model.fit()
    train=merged_df.iloc[:-100] #splitting training and testing
    test=merged_df.iloc[-100:]
    start=len(test)
    end=len(train)+len(test)-1
    pred=model.predict(start=start,end=end,typ='levels') #predicting the values
    series1 = pred.to_frame()
    series1['predicted_mean'] = series1['predicted_mean'].abs() #taking absolute values
    series1['predicted_mean']=series1['predicted_mean'].apply(np.floor)  #flooring the values
    series1=series1.iloc[-5:]
    test=test.iloc[-5:]
    test['pred']=series1['predicted_mean']
    test=test[['date','pred']]
    return test #returning the dataframe
df=prediction() 

