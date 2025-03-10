from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username' , 'password' , 'email')
        extra_kwargs = {'password' : {'write_only' : True}}
    
    def validate_email(self,value):
        if User.objects.filter(email = value).exists():
            raise ValidationError('A user with that email already exists!')
        return value
    # def validate_username(self,value):
    #     if User.objects.filter(username=value).exists():
    #         raise ValidationError('A user with this username already exists!')
        
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data)
        return user