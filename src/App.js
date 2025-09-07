import './App.css';
import AboutMe from './AboutMe';
import Skills from './Skills';
import ContactMe from './ContactMe';
import Experience from './Experience';
import { useState } from 'react';
import DialogBox from './DialogBox';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const mySkills = [
    'React',
    'Redux',
    'TypeScript',
    'HTML5',
    'CSS3',
    'Sass',
    'Tailwind CSS',
    'Material-UI',
    'Git',
    'RESTful APIs',
    'Webpack',
    'Babel',
    'JavaScript',
    'Vue.js',
    'Vuex',
    'Golang',
    'PHP',
    'mySQL',
    'MongoDB',
    'Agile Methodologies',
    'JIRA',
    'Unit Testing',
  ];

  const [skills] = useState(mySkills);
  const [open, setOpen] = useState(false);
  const [dialogBody, setdialogBody] = useState("You Really thought you could delete my skills? Not that easy buddy its in my memory not yours");
  const [dialogHeader, setDialogHeader] = useState("Oopppsieee");
  const [gifUrl, setGifUrl] = useState("https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif");


  const deleteSkill = () => {
    setdialogBody("You Really thought you could delete my skills? Not that easy buddy its in my memory not yours");
    setDialogHeader("Oopppsieee?");
    setGifUrl("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnNzeDR5aXVvcHp4aTUxN3kzcjVwendpenUxMDc2Y2JscHhuNHkzaiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/6Q2KA5ly49368/giphy.gif");

    setOpen(true);
    handleClickOpen();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addSkill = () => {
    handleClickOpen()
    setdialogBody("Hire Me to add Skills to my Portfolio");
    setDialogHeader("Interested?");
    setGifUrl("https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGY1aGp1ODR4OWwzZjZsNWhzOGV1NXBvb3RrcmZuam9tNXh5bWR0MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vFKqnCdLPNOKc/giphy.gif");
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/portfolio-website/" >
          <div className="App">
            <AboutMe />
            <Skills skills={skills} deleteSkill={deleteSkill} addSkill={addSkill} />
            <DialogBox open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} dialogBody={dialogBody} dialogHeader={dialogHeader} gifUrl={gifUrl} />
            <Experience />
          </div>
        </Route>
        <Route path="/portfolio-website/contact">
          <ContactMe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
