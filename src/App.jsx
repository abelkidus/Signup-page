function App() {
  return (
    <div className="App">
      <form action="">
        <label for="fname">Enter first name: </label>
        <input type="text" name="fname" id="" required placeholder="" />
        <br />
        <label for="lname">Enter last name: </label>
        <input type="text" name="lname" id="" required placeholder="" />
        <br />

        <label for="phone">Enter phone number: </label>
        <input type="number" name="phone" id="" required placeholder="" />
        <br />

        <label for="email">Enter email: </label>
        <input type="email" name="email" id="" required placeholder="" />
        <br />

        <label for="address">Enter address: </label>
        <input type="text" name="address" id="" required placeholder="" />
        <br />

        <label for="bday">Enter birthdate: </label>
        <input type="date" name="bday" id="" required placeholder="" />
        <br />

        <label for="password">Enter password: </label>
        <input type="password" name="password" id="" required placeholder="" />
        <br />
        <input type="button" value="Submit" />
      </form>
    </div>
  );
}

export default App;
