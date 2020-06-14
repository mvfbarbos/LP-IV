package ifms.aula;

import java.util.List;

public interface TodoService {
	
	List<Todo> findAll();
	
	void saveOrUpdate(Todo todo);
	void delete(String id);
	void update(String id, Todo todo);

}
