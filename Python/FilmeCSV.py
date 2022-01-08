#!/usr/bin/env python
# coding: utf-8

# In[8]:


import csv
import imdb
import numpy as np
import urllib.request
import re
def url_search(name):
    search_keyword=name + "trailer"
    search_keyword=search_keyword.replace(" ","+")
    html = urllib.request.urlopen("https://www.youtube.com/results?search_query=" + search_keyword)
    video_ids = re.findall(r"watch\?v=(\S{11})", html.read().decode())
    return("https://www.youtube.com/watch?v=" + video_ids[0])
IM=imdb.IMDb()
x=0
n=int(input("n="))
lista=[]
while(x!=n):
    film=input("Numele filmului care vrei sa-l adaugi: ")
    nume_film=IM.search_movie(film)
    x=x+1
    id_film=nume_film[0].movieID
    lista.append(id_film)
    vec=np.array(lista)
with open('Filme.csv','w',newline='')as file:
    writer=csv.writer(file)
    writer.writerow(["Nume film","Gen film","Director","Nota IMDB","Descriere","Trailer"])
    for i in vec:
        nume=IM.get_movie(i)
        for director in nume['directors']:
            direct=director['name']
        
        genre=nume.data['genres']
        rating=nume.data['rating']
        desc=nume.data['plot outline']
        
    
        writer.writerow([nume,genre,director,rating,desc,url_search(nume_film[0]['title'])])
    



# In[ ]:




