from django.contrib import admin
from django.contrib.auth.models import User

from .models import Profile, Request, Match

admin.site.unregister(User)
admin.site.register([User, Profile])
admin.site.register(Request)
admin.site.register(Match)
