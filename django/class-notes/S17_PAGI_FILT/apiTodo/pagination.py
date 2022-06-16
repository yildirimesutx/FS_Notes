from rest_framework import pagination

class SmallPageNumberPagination(pagination.PageNumberPagination):
    page_size = 1
    page_query_param = "sayfa"

class LargePageNumberPagination(pagination.PageNumberPagination):
    page_size = 5
    page_query_param = "sayfa"    

class MyLimitOffsetPagination(pagination.LimitOffsetPagination):
    default_limit = 1
    limit_query_param = "sayfadaki eleaman sayisi" #defaults to !limit
 
    # max_limit = 100   


class MyCursorPagination(pagination.CursorPagination):
   
    ordering = 'createdDate'
    page_size = 1
