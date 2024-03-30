from django.shortcuts import render
from bs4 import BeautifulSoup # Biblioteca para pegar informações de uma página HTML
import requests

# Create your views here.

def index(request):
     return render(request, 'banksearch/index.html')

def service(request):
     return render(request, 'banksearch/service.html')

def search(request):
     if "banco" in request.GET:
          banco = request.GET['banco']
          url = f'https://bancodata.com.br/relatorio/{banco}/'

          r = requests.get(url) # Pegando o código fonte do site pela URL
          soup = BeautifulSoup(r.text, "html.parser") # Organizando esse código HTML

          # Separando as informações que serão mostradas para o usuário
          informacoes = [
          'Publicação',
          'Lucro Líquido',
          'Patrimônio Líquido',
          'Ativo Total',
          'Captações',
          'Carteira de Crédito Classificada (R$)',
          'Patrimônio de Referência RWA (R$)',
          'Número de Agências',
          'Número de Pontos de Atendimento'
          ]

          # Criando um arquivo de .txt (ou abrindo se já existe)
          # e apagando seu conteúdo

          # w = write (escrever ou sobrescrever)
          # a = append (adicionar ao final do arquivo)

          # Criando arquivo .txt como append

          # Laço de repetição para encontrar todos os dados presentes
          # na div que contem a classe "main-info"
          n = 0
          info = []
          info_dict = {}
          for x in soup.find_all("div", {"class": "main-info"}):
               #info = f"{informacoes[n]}: {x.strong.get_text().strip()}\n"
               info.append(x.strong.get_text().strip())
               info_dict[informacoes[n]] = x.strong.get_text().strip()
               n += 1


     return render(request, 'banksearch/search.html', {"infos": info_dict})