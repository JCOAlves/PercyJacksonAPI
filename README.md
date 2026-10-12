# Percy Jackson API
A REST API system providing data on characters, creatures, artifacts, and themes from the Percy Jackson and the Olympians universe (Riordanverse).

The project aims to make data from the Percy Jackson universe available for programming studies using the REST API and for the development of applications for fans of the series, like websites featuring character profiles, a glossary of terms and words from Greco-Roman mythology, and Camp Half-Blood RPG games. 

The REST API was built with the framework **Express** using **TypeScript**. The data used in this project comes from the official website of the saga author Rick Riordan [*Rickriordan.com*](https://rickriordan.com/), the publisher of the Percy Jackson books [*Readriordan.com*](https://www.readriordan.com/) and the fan website [*Fandom.com*](https://www.fandom.com/).

[![Project tools](https://skillicons.dev/icons?i=express,ts)](https://skillicons.dev)

## How to run the Application locally
1. Clone the application repository to your local machine: 
    ```bash
    git clone https://github.com/JCOAlves/PercyJacksonAPI.git
    ```
2. Go to the *API* folder:
    ```bash
    cd API
    ```
3. Inside the *API* folder, install the project's dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file with the environment variables in *API*, based on `env.example`:
    ```bash
    npm run setup
    ```    
5. Finally, run the application using the API:
    ```bash
    npm run dev
    ```

## Routes of API
Five routes were created for the API, all of which are based on **GET** `/api``, the application's main route, which returns all data about characters, artifacts, cabins, locations, and books.
 
**Request route**:
```
/api
```

**Example response body**:
```json
{
  "success": true,
  "message": "Data successfully listed",
  "data": {
    "characters": ["..."], //list of JSON objects of type “characters”
    "artifacts": ["..."], //list of JSON objects of type “artifacts”
    "cabins": ["..."], //list of JSON objects of type “cabins”
    "places": ["..."], //list of JSON objects of type “places”
    "books": ["..."] //list of JSON objects of type “books”
  }
}
```
In the event of errors, the `error` attribute is returned in the response, and the `data` attribute is omitted:
```json
{
  "success": false,
  "message": "Error in the list of data",
  "error": "ROUTE_NOT_FOUND"
}
```

### Character route
- **GET** `/api/characters`: list of all saga characters. It can be filtered by `camp`, `pantheon`, `cabin` or `category`.

    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Characters successfully listed",
        "data": [
            {
                "name": "Agamethus",
                "description": "Poor Agamethus, the brother of Trophonius, was beheaded in ancient times and now walked 
                    around the Waystation communicating via his magic eight ball. For reasons unknown, he glows the exact color of Chee-tohs. Life is hard.",
                "category": "Mortal",
                "photoLink": "",
                "pantheon": "Greek"
            }, 
            // ...
        ]
    }
    ``` 

- **GET** `/api/characters/:name`: returns a specific character by name, which is a string.

    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "No character matching the specified criteria was found",
        "data": {
            "name": "Agamethus",
            "description": "Poor Agamethus, the brother of Trophonius, was beheaded in ancient times and now walked around the Waystation communicating via his magic eight ball. For reasons unknown, he glows the exact color of Chee-tohs. Life is hard.",
            "category": "Mortal",
            "photoLink": "",
            "pantheon": "Greek"
        }
    }
    ```

### Artifact route
- **GET** `/api/artifacts`: list of all saga artifacts. It can be filtered by `name`, `category` or `description` .
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Artifacts successfully listed",
        "data": [
            {
                "name": "Aegis",
                "description": "Thalia's primary defensive artifact. It is a silver bracelet that expands into a terrifying shield modeled after her father Zeus's      original Aegis. The shield is engraved with the horrifying face of the Gorgon Medusa; it projects a supernatural aura of absolute terror, causing monsters and mortals alike to panic, freeze, or flee in fear whenever she raises it.",
                "category": [
                    "weapon",
                    "attack",
                    "defense",
                    "protection"
                ],
                "photoLink": ""
            },
            // ...        
        ]
    }
    ```
  
- **GET** `/api/artifacts/:name`: returns a specific artifact by name, which is a string.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Artifact name parameter not provided",
        "data": {
            "name": "Aegis",
            "description": "Thalia's primary defensive artifact. It is a silver bracelet that expands into a terrifying shield modeled after her father Zeus's original Aegis. The shield is engraved with the horrifying face of the Gorgon Medusa; it projects a supernatural aura of absolute terror, causing monsters and mortals alike to panic, freeze, or flee in fear whenever she raises it.",
            "category": [
                "weapon",
                "attack",
                "defense",
                "protection"
            ],
            "photoLink": ""
        }
    }
    ```

### Cabin route
- **GET** `/api/cabins`: list of all cabins in Camp Half-Blood. It can be filtered by `cabinNumber`.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Cabins successfully listed",
        "data": [
            {
                "cabinNumber": 1,
                "description": "In the old days, Zeus had lots of demigod kids, but since the pact of the Big Three, children of Zeus have been rare. Thalia Grace is the most famous modern child of Zeus, though she joined the Hunters of Artemis and rarely visits camp. Children of Zeus can sometimes control wind and lightning. They are natural leaders, and many, like Heracles, are known for their tremendous strength and bravery. On the other hand, they tend to attract a lot of monsters. It´s a majestic marble structure with columns and a peaked roof. Lightning rod on top, with blue and white decorations throughout.",
                "divinity": "Zeus",
                "photoLink": "",
                "members": "Thalia Grace, Jason Grace"
            },
            // ...
        ]
    }
    ```

- **GET** `/api/cabins/:cabinNumber`: returns a specific cabin by cabin number, which is a number.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Cabin number parameter not provided",
        "data": {
            "cabinNumber": 1,
            "description": "In the old days, Zeus had lots of demigod kids, but since the pact of the Big Three, children of Zeus have been rare. Thalia Grace is the most famous modern child of Zeus, though she joined the Hunters of Artemis and rarely visits camp. Children of Zeus can sometimes control wind and lightning. They are natural leaders, and many, like Heracles, are known for their tremendous strength and bravery. On the other hand, they tend to attract a lot of monsters. It´s a majestic marble structure with columns and a peaked roof. Lightning rod on top, with blue and white decorations throughout.",
            "divinity": "Zeus",
            "photoLink": "",
            "members": "Thalia Grace, Jason Grace"
        }
    }
    ```

### Place route
- **GET** `/api/places`: list of all places in the Percy Jackson and the Olympians universe. It can be filtered by `location` or `description`.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Place successfully listed",
        "data": [
            {
                "name": "Aeithales",
                "description": "Aeithales — meaning \"evergreen\" in Ancient Greek — is a hidden estate and botany research facility located in Palm Springs, California. Built by Phillip McCaffrey, it serves as the childhood home of the young demigod Meg McCaffrey before it was largely burned down by the Roman Emperor Caligula.",
                "location": "Palm Springs, California",
                "photoLink": ""
            },
            // ...
        ]
    }
    ```

- **GET** `/api/places/:name`: returns a specific place by name, which is a string.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Place name parameter not provided",
        "data": {
            "name": "Aeithales",
            "description": "Aeithales — meaning \"evergreen\" in Ancient Greek — is a hidden estate and botany research facility located in Palm Springs, California. Built by Phillip McCaffrey, it serves as the childhood home of the young demigod Meg McCaffrey before it was largely burned down by the Roman Emperor Caligula.",
            "location": "Palm Springs, California",
            "photoLink": ""
        }
    }
    ```

### Book route
- **GET** `/api/sagas`: list of Percy Jackson book series. It can be filtered by `name`.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Sagas successfully listed",
        "data": [
            {
                "name": "Percy Jackson and the Olympians",
                "description": "",
                "booksNumber": 5,
                "books": [
                    {
                        "title": "The Lightning Thief",
                        "synopsis": "Percy Jackson is a 12-year-old boy with ADHD and dyslexia who was leading an ordinary life when he discovers that he is a demigod, the son of a Greek god and a mortal, and must go to Camp Half-Blood, a refuge for young demigods. There, Poseidon claims him as his son, and the gods accuse him of stealing Zeus’s master lightning bolt. Now he must travel across the United States to find the real thief and prevent a war among the gods, alongside the demigoddess Annabeth Chase — daughter of Athena — and his satyr friend Grover Underwood.",
                        "publicationDate": "July 1th, 2005",
                        "photoLink": "",
                        "author": "Rick Riordan",
                        "pagesNumber": 377
                    },
                    // ...
                ]
            },
            // ...
        ]
    }
    ```
  
- **GET** `/api/sagas/books`: list of all Percy Jackson universe books. It can be filtered by `saga`.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Books successfully listed",
        "data": [
            {
                "title": "The Lightning Thief",
                "synopsis": "Percy Jackson is a 12-year-old boy with ADHD and dyslexia who was leading an ordinary life when he discovers that he is a demigod, the son of a Greek god and a mortal, and must go to Camp Half-Blood, a refuge for young demigods. There, Poseidon claims him as his son, and the gods accuse him of stealing Zeus’s master lightning bolt. Now he must travel across the United States to find the real thief and prevent a war among the gods, alongside the demigoddess Annabeth Chase — daughter of Athena — and his satyr friend Grover Underwood.",
                "publicationDate": "July 1th, 2005",
                "photoLink": "",
                "author": "Rick Riordan",
                "pagesNumber": 377
            },
            // ...
        ]
    }
    ```

- **GET** `/api/sagas/books/:title`: returns a specific book by title, which is a string.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Saga successfully listed",
        "data": {
            "name": "Percy Jackson and the Olympians",
            "description": "",
            "booksNumber": 5,
            "books": [
                {
                    "title": "The Lightning Thief",
                    "synopsis": "Percy Jackson is a 12-year-old boy with ADHD and dyslexia who was leading an ordinary life when he discovers that he is a demigod, the son of a Greek god and a mortal, and must go to Camp Half-Blood, a refuge for young demigods. There, Poseidon claims him as his son, and the gods accuse him of stealing Zeus’s master lightning bolt. Now he must travel across the United States to find the real thief and prevent a war among the gods, alongside the demigoddess Annabeth Chase — daughter of Athena — and his satyr friend Grover Underwood.",
                    "publicationDate": "July 1th, 2005",
                    "photoLink": "",
                    "author": "Rick Riordan",
                    "pagesNumber": 377
                },
                // ...
            ]
        }
    }
    ```

- **GET** `/api/sagas/:name`: returns a specific Percy Jackson book series by name, which is a string.
  
    **Example response body**:
    ```json
    {
        "sucess": true,
        "message": "Book successfully listed",
        "data": {
            "title": "The Lightning Thief",
            "synopsis": "Percy Jackson is a 12-year-old boy with ADHD and dyslexia who was leading an ordinary life when he discovers that he is a demigod, the son of a Greek god and a mortal, and must go to Camp Half-Blood, a refuge for young demigods. There, Poseidon claims him as his son, and the gods accuse him of stealing Zeus’s master lightning bolt. Now he must travel across the United States to find the real thief and prevent a war among the gods, alongside the demigoddess Annabeth Chase — daughter of Athena — and his satyr friend Grover Underwood.",
            "publicationDate": "July 1th, 2005",
            "photoLink": "",
            "author": "Rick Riordan",
            "pagesNumber": 377
        }
    }
    ```

## Developers and contributors of the project
- [**Júlio César**](https://github.com/JCOAlves): Creator and main fullstack dev of the application.
- [**Breno Gusmão**](https://github.com/BrennoGithub): Contributor responsible for the release of part of the API data.

If you'd like to contribute to the project, create a *Pull Request*.
