import { ChangeEvent, useState } from "react";
import { Box, Image, Text, Heading, Button, TextInput } from "grommet";
import { Floppa } from "../utils/interfaces";
import { useParams } from "react-router-dom";

const Details = () => {
  const { hash } = useParams();
  const decodedFloppaString = hash ? atob(hash) : "";
  const floppa: Floppa = JSON.parse(decodedFloppaString);

  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState("");
  const [newPrice, setNewPrice] = useState(floppa.price);
  const [sizeSupplyCount, setSizeSupplyCount] = useState({
    XS: floppa.sizeSupplyCount.XS,
    S: floppa.sizeSupplyCount.S,
    M: floppa.sizeSupplyCount.M,
    L: floppa.sizeSupplyCount.L,
    XL: floppa.sizeSupplyCount.XL,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>, size: string) => {
    const newValue = e.target.value;
    if (!isNaN(Number(newValue))) {
      setSizeSupplyCount((prevSizeSupplyCount) => ({
        ...prevSizeSupplyCount,
        [size]: Number(newValue),
      }));
      setError("");
    } else {
      setError("Input must be a number");
    }
  };
  const uploadChanges = async () => {
    const body = {
      price: newPrice ? newPrice : floppa.price,
      sizeSupplyCount: sizeSupplyCount,
    };
    try {
      const response = await fetch(`http://localhost:3000/put`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        alert("Edited Correctly");
      }
    } catch (e) {
      console.error("error");
    }
  };

  const deleteItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: floppa.name }),
      });
      if (response.ok) {
        alert("Deleted Correctly");
      }
    } catch (e) {
      console.error("error");
    }
  };
  return (
    <Box pad="large">
      <Heading alignSelf="center">{floppa.name}</Heading>
      <Box direction="row" fill>
        <Box basis="1/2">
          <Image fit="contain" src={floppa.imageUrl} />
        </Box>
        <Box
          basis="1/2"
          pad="medium"
          gap="medium"
          margin="small"
          round="medium"
          border={{ size: "small", color: "brand" }}
        >
          {!editMode ? (
            <Text>Price: €{!newPrice ? floppa.price : newPrice}</Text>
          ) : (
            <Text>
              Price:{" "}
              <TextInput
                type="number"
                value={newPrice}
                onChange={(e) => setNewPrice(Number(e.target.value))}
              />
            </Text>
          )}
          <Text>Description: {floppa.description}</Text>
          <Text>Date: {floppa.date.toString()}</Text>
          <Text>Material: {floppa.material}</Text>
          <Box
            pad="small"
            border={{ size: "xsmall", color: "brand" }}
            round="medium"
            gap="small"
          >
            <Text>Size Supply Count:</Text>
            {Object.entries(sizeSupplyCount).map(([size, count]) => (
              <Box key={size}>
                <Text>
                  {size}:{" "}
                  {!editMode ? (
                    <Text>{count}</Text>
                  ) : (
                    <TextInput
                      type="number"
                      value={count}
                      onChange={(e) => handleChange(e, size)}
                    />
                  )}{" "}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box pad="large" gap="medium">
        {error && <Text color="red"> {error}</Text>}
        {!editMode && (
          <Button label="Edit" primary onClick={() => setEditMode(!editMode)} />
        )}
        {editMode && (
          <Button
            label="Done"
            primary
            onClick={() => {
              setEditMode(!editMode);
              uploadChanges();
            }}
          />
        )}
        <Button label="Delete" onClick={() => deleteItem()} />
      </Box>
    </Box>
  );
};

export default Details;
