# Estrutura de rotas da API

## Personagens (Character)
- ``/characters``: Lista todos os personagens. É possivel filtrar por categoria, acampamento, chalé e panteão.
- ``/characters/:name``: Retorna um personagem específico pelo nome.

## Artefatos (Artifact)
- ``/artifacts``: A rota lista todos os artefatos do sistema. É possivel filtrar por categoria, nome e descrição
- ``/artifacts/:name``: Retorna um artefato específico pelo nome.

## Chalés (Cabin)
- ``/cabins``: Lista todos os chalés do acampamento meio-sangue
- ``/cabins:cabinNumber``: Retorna um chalé específico pelo número.

## Lugar (Place)
- ``/places``: A rota lista todos os artefatos do sistema. É possivel filtrar por localização e descrição
- ``/places/:name``: Retorna um lugar pelo nome

## Livro (Book)
- ``/books``
- ``/books/sagas/:name``
- ``/books/:title``

