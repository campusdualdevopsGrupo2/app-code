INSTRUCCIONES PARA BUILD Y PUSH

aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 248189943700.dkr.ecr.eu-west-2.amazonaws.com


docker build --no-cache -t custom-nginx -f custom-nginx-page/Dockerfile .
docker tag custom-nginx:latest 248189943700.dkr.ecr.eu-west-2.amazonaws.com/repositorio-grupo-dos:custom-nginx
docker push 248189943700.dkr.ecr.eu-west-2.amazonaws.com/repositorio-grupo-dos:custom-nginx

docker build --no-cache -t custom-flask -f flask_personal/Dockerfile .
docker tag custom-flask:latest 248189943700.dkr.ecr.eu-west-2.amazonaws.com/repositorio-grupo-dos:custom-flask
docker push 248189943700.dkr.ecr.eu-west-2.amazonaws.com/repositorio-grupo-dos:custom-flask