from rest_framework import serializers
from .models import Zoo, Animal, Zookeeper


class ZooOptionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zoo
        fields = ['id', 'name']


class AnimalListSerializer(serializers.ModelSerializer):
    zoo_name = serializers.SerializerMethodField()

    class Meta:
        model = Animal
        fields = ['id', 'family', 'category', 'name', 'origin_land', 'food', 'zoo_name', 'date_of_birth', 'healthy']

    def get_zoo_name(self, obj):
        return obj.zoo.name if obj.zoo else ''


class AnimalFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Animal
        fields = '__all__'


class ZooListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zoo
        fields = ['id', 'name', 'address', 'town', 'postal_code', 'land', 'telephone_number', 'mail']



class ZooFormSerializer(serializers.ModelSerializer):

    class Meta:
        model = Zoo
        fields = '__all__'




class ZookeeperOptionSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Zookeeper
        fields = ['id', 'first_name', 'last_name', 'name']

    def get_name(self, obj):
        return ' '.join(filter(None, (obj.first_name, obj.last_name)))
