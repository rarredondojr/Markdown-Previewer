import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
     markdown:`
Marked - Markdown Parser
========================

Marked lets you convert [Markdown] into HTML.  Markdown is a simple text format whose goal is to be very easy to read and write, even when not converted to HTML.  This demo page will let you type anything you like and see how it gets converted.  Live.  No more waiting around.

How To Use The Demo
-------------------

1. Type in stuff on the left(or top if using a mobile device).
2. See the live updates on the right.(or bottom if using a mobile device)

That's it.  Pretty simple. 

- **Code:**  \`print("HELLO WORLD")\`

Here is some multiline code:
\`\`\`
#include <iostream>
using namespace std;

int main() 
{
    cout << "Hello, World!";
    return 0;
}
\`\`\`

Why Markdown?
-------------

It's easy.  It's not overly bloated, unlike HTML.  Also, as the creator of [markdown] says,

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

For more info checkout [marked](https://marked.js.org)

Ready to start writing?  Start changing stuff on the left(or top if using a mobile device)! Ready! Set! 

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Go_Logo_Aqua.svg/207px-Go_Logo_Aqua.svg.png)
      `
    };
    this.handleChange = this.handleChange.bind(this);
  }
    handleChange(event){
      this.setState({
         markdown:event.target.value //Set our markdown variable to 
      })
    }
    getMarkdownText() {
      var rawMarkup = marked(this.state.markdown, {sanitize: true}); //Lets just sanitize the markdown
      return { __html: rawMarkup };
    }
    
  render() {
    return (
      <div className = "container-fluid">
        <div className="border border-dark row">
          <header className="app-header">
            <span className="App-title">markdown previewer</span>
            <span id="author" class="text-right">By Ramon Arredondo using React</span>
          </header>
        </div>
        <div className="row">
         <div className="col-sm-6">
            <textarea className="form-control" id="editor" autoFocus onChange={this.handleChange}>
            {this.state.markdown}
            </textarea>
         </div>
         <div className="col-sm-6">
           <div id="preview" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
         </div>
        </div>
      </div>
    );
  }
}

export default App;
