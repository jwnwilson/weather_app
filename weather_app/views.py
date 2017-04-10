from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'home.html'

    def get(self, request):
        context = {}
        return self.render_to_response(context)