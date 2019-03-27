# Universal Resource Identifier (URI) Rules

## Resources

REST API Design Rulebook. Mark Masse, O'Reilly Media, Inc.

## URI Format Rules
```javascript
scheme "://" domain "/" path ["?" query] ["#" fragment]
```
* Use forward slashes (/) to indicate hierarchical relationships.
* Do not include a trailing forward slash (/) at the end of a URI.
* Use hyphens (-) for readability, anywhere you would normally put a space or a hyphen in English.
* Do not use underscores (_), since they can be hidden by text underlines.
* Do not include file extensions. Use the `Content-Type` header to determine how to process the body's content.

## Domain Rules

* Use consistent subdomain names for your API.
    * First subdomain and domain should identify who owns the service (e.g., `soccer.adidas.com`).
    * Full domain name should start with `api` (e.g., `api.soccer.adidas.com`).  
* Use consistent subdomain names for your developer portal.
    * Full domain name should start with `developer` (e.g., `developer.soccer.adidas.com`).

## Resource Modeling Rules

### Resource Archetypes

* **Document**
    * A singular resource, like an object instance or a record.
* **Collection**
    * A directory of resources.
    * Clients can request that information be added, but the collection decides itself whether or not to actually make changes to the resources.
    * Collection decides on URIs for new resources.
* **Store**
    * A client-managed directory of resources.
    * Client tells store what resources to add, edit, remove.
    * Store never decides on URIs, since it doesn't create new resources itself. It just listens to whatever the client wants to create.
* **Controller**
    * A procedure, like an executable function with inputs (parameters) and outputs (return values).
    * Usually for actions that can't be mapped to one of the other CRUD methods.
    
### URI Path Rules

* Use a singular noun for document names.
* Use a plural noun for collection names.
* Use a plural noun for store names.
* Use a verb or verb phrase for controller names.
* Path segments can be static (e.g., `/teams`), or they can be variable and substitute identity-based values (e.g, `/teams/{teamID}` can be `/teams/earthquakes`).
    * A URI template can show which path segments must be substituted before the URI can be resolved (e.g., `/teams/{teamID}`).
* Do not use CRUD names in URIs (e.g., `/deleteUser/1234`). Use the appropriate HTTP request method instead.

### URI Query Rules

* The query component can be used to filter the resources in a collection or store.
* Use the query component to paginate results from a collection or store.