



// GET route for retrieving all notes
notes.get("/", (req, res) => {
    //console.log("getting route for all notes");
    readFromFile("./db/notes.json").then(data => res.json (JSON.parse (data)))
})

// note by ID
notes
    // GET route for a specific note by ID
    .route("/:id")
    .get((req.res) => {
        const noteID = req.params.id;
        if (noteID) {
            // checks database and filters for matching note ID
            readFromFile('./db/notes.json')
                .then((data) =>JSON.parse(data))
                .then((json) => {
                    const result = json.filter((note) => note.id === noteID);
                    return result.length > 0
                    ? res.json(result)
                    : res.json('No note with that ID');
                });
        }
    })

// PUT route for a specific note by ID
.put ((req, res) => {
    // finds old version of note
    const noteID = req.params.id;
    let newID = noteID;
})