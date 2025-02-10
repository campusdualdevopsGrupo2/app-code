# App-Code Borrador 


Este repositorio contiene los recursos de infraestructura para la gestión y despliegue de diversas aplicaciones y servicios en la nube.

📂 Estructura del Repositorio

.github/workflows/ → Contiene los workflows de GitHub Actions para la automatización del CI/CD.

g2-cdt-m2-c4-ansible-wordpress/ → Configuración de Ansible para desplegar WordPress en EC2.

g2-cdt-m2-c8-terragrunt-terragrunt-wordpress/ → Configuración de Terragrunt para el despliegue de WordPress.

g2-cdt-m3-c2-kubernetes-kubernetes/ → Configuración de Kubernetes.

g2-cdt-m3-c3-eks-modulo-wordpress-eks/modulo_eks/ → Configuración de EKS con WordPress.

g2-cdt-m3-c4-ecr-y-eks-modulo-ecr-y-eks/ → Configuración combinada de ECR y EKS.

g2-cdt-m3-c5-ecs-aws-ecs/ecs_resources/ → Configuración de Amazon ECS.

g2-cdt-m3-c6-ecs-conf-ecs/ecs_resources/ → Configuración adicional para ECS.

g2-cdt-m3-c5-custom_nginx_page/ → Página personalizada en Nginx.

g2-cdt-m3-c5-flask_personal/ → Aplicación Flask personalizada.

g2-cdt-m3-c8-node_dia_31/ → Aplicación Node.js.

g2-cdt-m4-c1-node_app/ → Aplicación Node.js en módulo 4.

g2-cdt-m3-c8-project-chat-app/chat_app/ → Aplicación de chat en tiempo real.

g2-cdt-m4-c3-bucket-s3-con-politica-de-retencion/bucket-s3-con-politica-de-retencion/ → Configuración de un bucket S3 con una política de retención.

g2-cdt-prod-fixed-resources/ → Recursos fijos de producción.

.gitignore → Archivo de configuración para ignorar archivos innecesarios en Git.

README.md → Documentación del repositorio.

🚀 Descripción General

Este repositorio forma parte del trabajo del equipo campusdualdevopsGrupo2, donde se desarrollan módulos de infraestructura utilizando herramientas como Terraform, Terragrunt, Ansible, Kubernetes, AWS y GitHub Actions.

📌 Últimos Cambios

Se realizaron actualizaciones en los workflows de GitHub Actions.

Se modificaron los nombres y estructuras de carpetas de varios módulos para mayor claridad.

Se agregaron nuevas aplicaciones personalizadas en Nginx, Flask y Node.js.


⚙️ Requisitos

Para utilizar este repositorio, asegúrate de tener instalados:

Terraform

Terragrunt

Ansible

AWS CLI

Git

📖 Uso

Clona el repositorio:

git clone https://github.com/campusdualdevopsGrupo2/infra-resources.git

Accede al directorio del módulo que deseas utilizar:

cd g2-cdt-m3-c3-eks-modulo-wordpress-eks

Aplica la configuración con Terraform o Terragrunt:

terragrunt run-all apply

🛠 Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

Crea un fork del repositorio.

Crea una nueva rama con un nombre descriptivo.

Realiza tus cambios y realiza un commit.

Abre un Pull Request para revisión.

📜 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

✉️ Para dudas o sugerencias, contacta con los administradores del repositorio o abre un issue.

