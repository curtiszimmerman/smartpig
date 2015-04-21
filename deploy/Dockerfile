
 #################################################################
###    ###    ###    #  ##  #     #     ##     #    #  ####     ###
### ##  #  ##  #  ####  #  ##  ####  ##  #  #####  ##  ####  ######
### ##  #  ##  #  ####    ###     #     ##     ##  ##  ####     ###
### ##  #  ##  #  ####  #  ##  ####  ##  #  #####  ##  ####  ######
###    ###    ###    #  ##  #     #  ##  #  ####    #     #     ###
 #################################################################

# ________-=< to get a shell on the running container >=-________ #
#/                                                               \#
#|             docker exec myContainer -it /bin/bash             |#
#\_______________________________________________________________/#

FROM google/nodejs
MAINTAINER curtis zimmerman <software@curtisz.com>

RUN apt-get update
RUN apt-get install -y git

RUN mkdir -p /var/www/blank.mediamoat.com/
RUN git clone https://github.com/curtiszimmerman/dummy.git /var/www/dummy/
WORKDIR /var/www/dummy/

RUN npm install

EXPOSE 80

CMD ["/nodejs/bin/node", "api.js"]
