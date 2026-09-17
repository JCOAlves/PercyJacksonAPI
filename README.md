# Percy Jackson API
A REST API system providing data on characters, creatures, artifacts, and themes from the Percy Jackson &amp; the Olympians universe (Riordanverse).

The project aims to make data from the Percy Jackson universe available for programming studies using the REST API and for the development of applications for fans of the series, like websites featuring character profiles, a glossary of terms and words from Greco-Roman mythology, and Camp Half-Blood RPG games. 

The REST API was built with the framework **Express** using **TypeScript**. The data used in this project comes from the official website of the saga author Rick Riordan [*Rickriordan.com*](https://rickriordan.com/), the publisher of the Percy Jackson books [*Readriordan.com*](https://www.readriordan.com/) and the fan website [*Fandom.com*](https://www.fandom.com/).

[![Project tools](https://skillicons.dev/icons?i=express,ts)](https://skillicons.dev)

## Routes of API
Five routes were created for the API, all of which are based on ``/api``, the application's main route, which returns all data about characters, artifacts, cabins, locations, and books.
 
**Request route**:
```
/api
```

**Response body**:
```typescript
{
  sucess: boolean,
  message: string,
  data?: {
    characters: (Character | Demigod | Divinity | Creature)[],
    artifacts: Artifact[],
    cabins: Cabin[],
    places: Place[],
    books: Book[]
  } | null,
  error?: Error | any | undefined
}
```
In the event of errors, the ``error`` attribute is returned in the response, and the ``data`` attribute is omitted.

### Character route
- ``/api/characters``: list of all saga characters. It can be filtered by `camp`, `pantheon`, `cabin` or `category`.

    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: (Character | Demigod | Divinity | Creature)[] | null,
      error?: Error | any | undefined
    }
    ``` 

- ``/api/characters/:name``: returns a specific character by name, which is a string.

    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Character | Demigod | Divinity | Creature | null,
      error?: Error | any | undefined
    }
    ```

### Artifact route
- ``/api/artifacts``: list of all saga artifacts. It can be filtered by `name`, `category` or `description` .
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Artifact[] | null,
      error?: Error | any | undefined
    }
    ```
  
- ``/api/artifacts/:name``: returns a specific artifact by name, which is a string.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Artifact | null,
      error?: Error | any | undefined
    }
    ```

### Cabin route
- ``/api/cabins``: list of all cabins in Camp Half-Blood.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Cabin[] | null,
      error?: Error | any | undefined
    }
    ```

- ``/api/cabins/:cabinNumber``: returns a specific cabin by cabin number, which is a number.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Cabin | null,
      error?: Error | any | undefined
    }
    ```

### Place route
- ``/api/places``: list of all places in the Percy Jackson &amp; the Olympians universe. It can be filtered by `location` or `description`.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Place[] | null,
      error?: Error | any | undefined
    }
    ```

- ``/api/places/:name``: returns a specific place by name, which is a string.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Place | null,
      error?: Error | any | undefined
    }
    ```

### Book route
- ``/api/books``: list of all Percy Jackson universe books. It can be filtered by `saga`.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Saga[] | null,
      error?: Error | any | undefined
    }
    ```

- ``/api/books/sagas``: list of Percy Jackson book series. It can be filtered by `name`.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Saga[] | null,
      error?: Error | any | undefined
    }
    ```
  
- ``/api/books/:title``: returns a specific book by title, which is a string.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Book | null,
      error?: Error | any | undefined
    }
    ```

- ``/api/books/sagas/:name``: returns a specific Percy Jackson book series by name, which is a string.
  
    **Response body**:
    ```typescript
    {
      sucess: boolean,
      message: string,
      data?: Saga | null,
      error?: Error | any | undefined
    }
    ```
