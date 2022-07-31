# ParkCheck.Tech backend info

## File structure

### `api/db/`
The DB directory holds the SQLite info about the Parks database.

In addition it holds `db.py` which handles application commands for flask talking to database.db

### `api/NatPark/`

`NatPark.py`  - Base class for holding information about each National Park

`NPSGrabber.py` - Makes an API call to the National Park Service to get a list of all the parks with info

### `api/routes/`

`park.py` - Is the bridge between the frontend and backend. Shares info from the park database with the frontend

`version.py` - A bridge to the frontend to report version number


