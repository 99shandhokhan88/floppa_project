
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Data
@Document(collection = "items")
package e_commerce.e_commerce;

import org.springframework.data.annotation.Id;

public class Item {
        @Id
    private String id;
    private String name;
    private String description;
    private int quantity;
    
}
