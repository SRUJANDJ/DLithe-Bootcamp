import pandas as pd 

def students(df_sslc,df_puc):
    x=int(input("1.10th students\n2.12th students\noption:  "))
    if x==1:
        value=df_sslc
    elif x==2:
        value=df_puc
    else:
        print("invalid entry")
    
    while True:
        choice=int(input(" 1.Total no of student appeared\n 2.Attended and not Attended exams\n 3.Top 10 students\n 4.Failed students\n 5.exit\n\noption:  "))
        if choice==1:
            print("Total students",print(pd.concat([df_sslc['register_no'],df_puc['register_no']]).count()))
        elif choice==2:
            print("Attended",value['register_no'].count()-value.isnull().any(axis=1).sum())
            print("Not attended",value.isnull().any(axis=1).sum())
        elif choice==3:
            df_sorted = value.sort_values(by='Total score', ascending=False)
            print(df_sorted[['register_no','name','Total score']].head(5))
        elif choice==4:
            value['failed']=value['Total score']<200
            failed_stu=value[value['failed']]
            print(failed_stu[['register_no','name','Total score']])
        elif choice==5:
            break
        else:
            print("invalid entry")
            break


df_sslc=pd.read_csv('sslcsheet.csv')
df_puc=pd.read_csv('pusheet.csv')
df_sslc['class'].fillna(10,inplace=True)
df_puc['class'].fillna(12,inplace=True)
df_sslc['Passed_All'] = df_sslc[['maths', 'science', 'english', 'kannada']].fillna(0).min(axis=1) >= 35
df_puc['Passed_All'] = df_puc[['physics', 'chemistry', 'maths', 'computer']].fillna(0).min(axis=1) >= 35
df_sslc['Total score'] = df_sslc[['maths', 'science', 'english', 'kannada']].sum(axis=1)
df_sslc['percentage']=df_sslc['Total score']/4
df_puc['Total score'] = df_puc[['physics', 'chemistry', 'maths', 'computer']].sum(axis=1)
df_puc['percentage']=df_puc['Total score']/4
df_sslc.to_csv('10thstudents_data.csv', index=False)
df_puc.to_csv('12thstudents_data.csv', index=False)
#students(df_sslc,df_puc)





