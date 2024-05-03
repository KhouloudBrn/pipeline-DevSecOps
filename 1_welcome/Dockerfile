#Image de base
FROM nginx 

# Installation de d'nginx , git et suppression du contenu de /var/www/html
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y git 

# Repertoire de travail
WORKDIR usr/share/nginx/html 

#Clonage du depot github
RUN git clone https://github.com/KhouloudBrn/pipeline-DevSecOps.git
# Modification de permission des repertoires et fichiers 
RUN chmod -R 755 pipeline-DevSecOps

RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY default.conf /etc/nginx/conf.d/
# Copie du fichier de configuration my_config.conf dans conf.d
COPY nginx.conf /etc/nginx/nginx.conf

# Expose le port 80 (le port par défaut pour HTTP)
EXPOSE 80

# Point d'entrée pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
