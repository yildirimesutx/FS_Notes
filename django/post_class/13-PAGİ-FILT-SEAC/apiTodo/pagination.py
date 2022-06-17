from rest_framework import pagination
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination, CursorPagination


# class MyPageNumberPahination(pagination.PageNumberPagination):

class MyPageNumberPagination(PageNumberPagination):
    page_size = 1
    page_query_param = 'sayfa'

class MyLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 1 
    limit_query_param = 'sayfadaki veri sayısı'


class MyCursorPagination(CursorPagination) :
    ordering = "createdDate"
    page_size = 3

