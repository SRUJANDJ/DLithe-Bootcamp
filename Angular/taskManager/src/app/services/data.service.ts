import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl="http://localhost:3000/tasks"
  constructor(private http:HttpClient) { }


  getData(url:any){
    return this.http.get(url)
  }

  postData(url:any,data:any){
    return this.http.post(url,data)
  }
  /* updateTaskList(email: string, newTask: string): Observable<any> {
    const endpoint = `${this.apiUrl}`;

    // Fetch the existing task list for the user
    this.http.get<any[]>(endpoint).subscribe(
      (tasks) => {
        const existingTask = tasks.find((task) => task.email === email);
        console.log(existingTask);
        

        if (existingTask) {
          // Update the task list by adding the new task
          existingTask.tasklist.push(newTask);
          console.log(`${endpoint}/${existingTask.id}`);
          

          // Send the updated task list back to the server
          this.http.post(`http://localhost:3000/tasks/c01b`, existingTask).subscribe(
            (response) => {
              console.log('Task added successfully', response);
            },
            (error) => {
              console.error('Error adding task', error);
            }
          );
        } else {
          console.error('User not found');
        }
      },
      (error) => {
        console.error('Error fetching task list', error);
      }
    );

    return new Observable(); // Return an observable for the sake of the method signature
  } */
  updateTask(taskId: string, updatedTask: any): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;

    // Assuming your JSON Server requires the 'Content-Type' header
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, updatedTask, { headers });
  }

}
