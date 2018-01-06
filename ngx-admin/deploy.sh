#!/bin/sh
tar zcvf dist.tgz dist
scp dist.tgz pi@10.0.1.10:~
ssh pi@10.0.1.10 "rm -rf /var/www/html/*; cp /home/pi/dist.tgz /var/www/html/; rm -rf /home/pi/dist.tgz; cd /var/www/html/; tar zxvf dist.tgz --strip-components=1;"

