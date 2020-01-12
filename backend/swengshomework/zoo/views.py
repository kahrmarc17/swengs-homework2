from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from swengshomework.zoo.models import Zoo, Animal, Zookeeper
from swengshomework.zoo.serializers import ZooOptionSerializer, AnimalListSerializer, AnimalFormSerializer, ZookeeperOptionSerializer, ZooFormSerializer, ZooListSerializer


@swagger_auto_schema(method='GET', responses={200: ZooOptionSerializer(many=True)})
@api_view(['GET'])
def zoo_option_list(request):
    zoos = Zoo.objects.all()
    serializer = ZooOptionSerializer(zoos, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: AnimalListSerializer(many=True)})
@api_view(['GET'])
def animal_list(request):
    zoos = Animal.objects.all()
    serializer = AnimalListSerializer(zoos, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='GET', responses={200: ZookeeperOptionSerializer(many=True)})
@api_view(['GET'])
def zookeeper_list(request):
    zookeepers = Zookeeper.objects.all()
    serializer = ZookeeperOptionSerializer(zookeepers, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=AnimalFormSerializer, responses={200: AnimalFormSerializer()})
@api_view(['POST'])
def animal_form_create(request):
    data = JSONParser().parse(request)
    serializer = AnimalFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=AnimalFormSerializer, responses={200: AnimalFormSerializer()})
@api_view(['PUT'])
def animal_form_update(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Animal.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = AnimalFormSerializer(animal, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: AnimalFormSerializer()})
@api_view(['GET'])
def animal_form_get(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Animal.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)

    serializer = AnimalFormSerializer(animal)
    return Response(serializer.data)


@api_view(['DELETE'])
def animal_delete(request, pk):
    try:
        animal = Animal.objects.get(pk=pk)
    except Zoo.DoesNotExist:
        return Response({'error': 'Animal does not exist.'}, status=404)
    animal.delete()
    return Response(status=204)


@swagger_auto_schema(method='GET', responses={200: ZooListSerializer(many=True)})
@api_view(['GET'])
def zoo_list(request):
    zoos = Zoo.objects.all()
    serializer = ZooListSerializer(zoos, many=True)
    return Response(serializer.data)


@swagger_auto_schema(method='POST', request_body=ZooFormSerializer, responses={200: ZooFormSerializer()})
@api_view(['POST'])
def zoo_form_create(request):
    data = JSONParser().parse(request)
    serializer = ZooFormSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='PUT', request_body=ZooFormSerializer, responses={200: ZooFormSerializer()})
@api_view(['PUT'])
def zoo_form_update(request, pk):
    try:
        zoo = Zoo.objects.get(pk=pk)
    except Zoo.DoesNotExist:
        return Response({'error': 'Zoo does not exist.'}, status=404)

    data = JSONParser().parse(request)
    serializer = ZooFormSerializer(zoo, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=400)


@swagger_auto_schema(method='GET', responses={200: ZooFormSerializer()})
@api_view(['GET'])
def zoo_form_get(request, pk):
    try:
        zoo = Zoo.objects.get(pk=pk)
    except Zoo.DoesNotExist:
        return Response({'error': 'Zoo does not exist.'}, status=404)

    serializer = ZooFormSerializer(zoo)
    return Response(serializer.data)


@api_view(['DELETE'])
def zoo_delete(request, pk):
    try:
        zoo = Zoo.objects.get(pk=pk)
    except Zoo.DoesNotExist:
        return Response({'error': 'Zoo does not exist.'}, status=404)
    zoo.delete()
    return Response(status=204)
