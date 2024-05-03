#Image de base
FROM ubuntu

# Installation de d'nginx , git et suppression du contenu de /var/www/html
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nginx git && \
    apt-get update && rm -rf /var/www/html/*

# Repertoire de travail
WORKDIR /var/www/html/

#Clonage du depot github
RUN git clone https://github.com/KhouloudBrn/YourImaginaryFriend.git

# Modification de permission des repertoires et fichiers 
RUN chmod -R 755 YourImaginaryFriend/*

# Copie du fichier de configuration my_config.conf dans conf.d
COPY my_config.conf /etc/nginx/conf.d/

# Expose le port 80 (le port par défaut pour HTTP)
EXPOSE 80

# Point d'entrée pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
