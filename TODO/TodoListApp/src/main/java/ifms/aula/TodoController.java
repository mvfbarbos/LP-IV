package ifms.aula;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

@RestController
@RequestMapping("/api/javatodos")
public class TodoController {

	@Autowired
	private TodoService todoService;

	@CrossOrigin
	@GetMapping(value = "/")
	public List<Todo> getAll() {
		return todoService.findAll();
	}

	@CrossOrigin
	@PostMapping(value = "/")
	public ResponseEntity<?> saveOrUpdate(@RequestBody Todo todo) {
		todoService.saveOrUpdate(todo);
		return new ResponseEntity<>("Student added sucessfully", HttpStatus.OK);
	}

	@CrossOrigin
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable String id) {
		todoService.delete(id);
	}

	@CrossOrigin
	@PutMapping(value = "/{id}")
	public void update(@PathVariable("id") String id, @RequestBody Todo todo) {
		todoService.update(id, todo);
	}

	@CrossOrigin
	@PostMapping(value = "/{id}")
	public void accomplished(@PathVariable("id") String id, @RequestBody Todo todo) {
		todoService.update(id, todo);
	}

}
