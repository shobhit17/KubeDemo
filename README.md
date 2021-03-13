# Docker and Kubernetes

## Docker 

### What is Container?

https://www.docker.com/resources/what-container

### Setup for Mac

1. Install DockerHub in your system https://docs.docker.com/docker-for-mac/install/

### Deploy your first container.

1. Clone the Project https://github.com/shobhit17/KubeDemo
2. This project contains a DockerFile which tells the Docker system how the image should be created.
3. Create the Docker image using command docker image build . -t demoappimage. Here *demoappimage* is the name of the image to be created.
4. Check if the image got created using command docker images
5. Run a docker the container using command docker run -p 30010:30010 --name demoAppContainer -d demoappimage:latest . Here *demoappimage:latest* is the image name created in step 4 and -p port tells which port to map the container port with system port.
6. Check the running container using command docker ps
7. Test the application using command curl http://localhost:30010/printparam/HelloWorld
8. Kill the container using command docker kill demoAppContainer && docker rm demoAppContainer

## Kubernetes

### What is Kubernetes?

Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerised applications.

### Setup for Mac

1. Enable Kubernetes [https://medium.com/containers-101/local-kubernetes-for-mac-minikube-vs-docker-desktop-f2789b3cad3a](https://medium.com/containers-101/local-kubernetes-for-mac-minikube-vs-docker-desktop-f2789b3cad3a#:~:text=Click%20the%20Docker%20icon%20in,command%20line%20utility%20as%20well).

### Important concepts of Kebernetes.

1. **Service:** It is used to provide a network access to the application. It is used to provide a single IP/DNS for all instance of the application. There multiple types of service. The two major type of service are-
    1. **ClusterIP:** The application with this type of service can be accessed only from client inside the cluster. This service type cannot serve traffic from outside.
    2. **LoadBalancer:** The application with this type of service can be accessed through request coming from outside the cluster through load balancer of your machine.
2. **Deployment:** A deployment allows you to describe an application’s life cycle, such as which images to use for the app, the number of instance there should be. It also help is updating the instances with new code or rolling it back to old version.
3. **Pods:** These are the actual running instances of the applications. These pods are mapped to the actual container running.
4. **Namespace**: It is a concept used to group k8s resources like Service, Deployment, pods. Multiple team can deploy their application into same k8s cluster and have the logical separation between them.


### Deploy your app using Kubernetes

1. The Project above has 2 yaml files. mongodb.yaml to run mongodb server and demoapp.yaml for our application.
2. Create the mongodb server using command kubectl apply -f mongodb.yaml
3. Deploy the application using command kubectl apply -f demoapp.yaml


### Useful Resources

1. https://dzone.com/articles/docker-containers-and-kubernetes-an-architectural
2. https://medium.com/faun/introduction-to-containers-and-kubernetes-7652bd7570db
3. https://kubernetes.io/
4. https://www.tutorialspoint.com/kubernetes/index.htm
