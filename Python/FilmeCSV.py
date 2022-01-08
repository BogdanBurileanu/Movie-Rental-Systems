#!/usr/bin/env python
# coding: utf-8

# In[26]:


import csv
import imdb
import numpy as np
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
    writer.writerow(["Nume film","Gen film","Director","Nota IMDB","Descriere"])
    for i in vec:
        nume=IM.get_movie(i)
        for director in nume['directors']:
            direct=director['name']
        
        genre=nume.data['genres']
        rating=nume.data['rating']
        desc=nume.data['plot outline']
    
        writer.writerow([nume,genre,director,rating,desc])
    



# In[ ]:




