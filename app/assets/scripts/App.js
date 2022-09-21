import '../styles/styles.css'
import Person from './modules/Person'

if (module.hot) {
  module.hot.accept ()
}

var john = new Person("John Doe", "red");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();