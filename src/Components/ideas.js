  .homepage - hero {
  // border: solid red;
  margin - top: 30px;
  height: 100vh;
  display: flex;
  justify - content: space - evenly;
}
  .homepage - hero - item {
  // border: solid yellow;
  color: #282828;
  margin: 20px;
  width: 40em;
  height: 25em;
  border - radius: 30px;
  // box-shadow: 0 8px 6px -6px black;
  filter: drop - shadow(3px 3px 8px gray);
  background - color: white;
    .homepage - hero - list - items {
    width: 20em;
    margin: auto;
    text - align: center;
      .homepage - list - item - arrow {
      font - weight: bold;
      font - size: 1.1em;
    }
  }
    .homepage - locations {
    // white-space: normal;
    // background-color: red;
    // font-size: 100em;
    // padding: 50px;
  }
  p {
    margin - top: 25px;
    font - weight: bold;
    font - size: 2.1em;
  }
  li {
    list - style - type: none;
    margin - bottom: 9px;
    font - size: 1.5em;
  }
  h3 {
    white - space: normal;
    overflow - wrap: break-word;
    padding: 30px;
    text - align: left;
    margin - top: -28px;
  }
}
  .homepage - hero - item - location {
  // border: solid yellow;
  position: sticky;

  color: #282828;
  margin: 20px;
  width: 40em;
  height: 25em;
  border - radius: 30px;
  // box-shadow: 0 8px 6px -6px black;
  filter: drop - shadow(3px 3px 8px gray);
  background - color: white;
}
  .homepage - locations {
  // border: solid red;
  border - radius: 30px;
  height: 18em;
  overflow - y: scroll;
}
h3 {
  white - space: normal;
  overflow - wrap: break-word;
  padding: 30px;
  text - align: left;
  margin - top: -28px;
}


<form onSubmit={this.handleSubmit}>
  <label>
    First and Last Name:
              <br />
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <br />
  </label>
  <label>
    Phone Number:
              <br />
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <br />
  </label>
  <label>
    E-Mail:
              <br />
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <br />
  </label>
  <label>
    City:
              <br />
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    <br />
  </label>
  <label>
    Tell us any specifics about your project:
              <br />
    <textarea type="text" value={this.state.value} onChange={this.handleChange} />
    <br />
  </label>
  <br />
  <input type="submit" value="Submit" />
</form>



  .service - list {
  // border: solid white;
  height: 65vh;
  width: 90vw;
  font - size: 7vmin;
  columns: 2;
  // column-rule-style: solid;
  // text-decoration: none;
  margin: 0 auto;
  padding: 20px 0;

  ul {
    // border: solid red;
    margin: 0 20vmin;

    li {
      // list-style: none;
      margin - bottom: 125px;
      text - align: left;
      white - space: nowrap;
    }
  }
}