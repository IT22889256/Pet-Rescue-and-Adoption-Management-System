// create a new user
app.post('/api/users', (req, res) => {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser.save().then(item => {
      console.log(item);
      res.status(201).json({ message: 'Item added successfully' });
    })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'Server error' });
      });
  });