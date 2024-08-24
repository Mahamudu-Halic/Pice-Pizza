import Navbar from "../components/navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useContext, useEffect, useRef, useState } from "react";
import { Physics, RigidBody } from "@react-three/rapier";
import "../styles/service.css";
import MenuModal from "../components/menu.modal";
import { OrderContext } from "../services/order/order.context";

const toppingsData = [
  { name: "Cheese", model: "./cheese.glb" },
  { name: "Bell pepper", model: "./pepperoni.glb" },
  { name: "Pepperoni", model: "./chicken.glb" },
  { name: "Tuna", model: "./beef.glb" },
  { name: "Beef", model: "./beef2.glb" },
  { name: "Chicken", model: "./tuna.glb" },
  { name: "Sausage", model: "./sausage.glb" },
];

const Customization = () => {
  const [activeToppings, setActiveToppings] = useState([]);
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("small")
  const [unitPrice, setUnitPrice] = useState(0)
  const formRef = useRef()
  

  const { addOrders, orders } = useContext(OrderContext);
  // const nfoodId = customAlphabet("1234567890", 4);

  const handleOrder = (e) => {
    e.preventDefault()
    if(unitPrice != 0){const order = {
      unitPrice,
      quantity,
      size
    };

    addOrders(order, order);
    setActiveToppings([]);
    formRef.current.reset()
}
  };

  const pizzaModel = useLoader(GLTFLoader, "./dough.glb", (loader) => {
    loader.manager.onError = (url) => console.error(`There was an issue loading ${url}`);
  });

  const handleToppingChange = (modelPath, isChecked) => {
    if (isChecked) {
      addTopping(modelPath);
    } else {
      removeTopping(modelPath);
    }
  };

  const OnHandleClick = (value) => {
    const input = document.getElementById(value)
    input.click()
  }

  const addTopping = (modelPath) => {
    // if (!activeToppings.some((topping) => topping.model === modelPath)) {
    //   setActiveToppings([...activeToppings, { model: modelPath }]);
    // }
    if (!activeToppings.some((topping) => topping.model === modelPath)) {
      const updatedToppings = [...activeToppings, { model: modelPath }];
      setActiveToppings(updatedToppings);
    }
  };

  const removeTopping = (modelPath) => {
    setActiveToppings(activeToppings.filter((topping) => topping.model !== modelPath));
  };

  const handleQuantityReduce = () => {
    if (quantity != 1){
      setQuantity(quantity -1)
    }
  }

  useEffect(() => {
    setUnitPrice(activeToppings.length * 30)

  }, [activeToppings])


  return (
    <>
      <Navbar style="navColor" bg="blueBg" />

      <div className="customization-container">
        <div className="canvas-container">
          <Canvas style={{ width: "100%", height: "100vh" }}>
            <OrbitControls makeDefault autoRotate />
            <ambientLight />
            <Physics>
              <Stage environment="city" intensity={0.1}>
                <RigidBody type="fixed"> {/* Static pizza, no movement */}
                  <primitive object={pizzaModel.scene} scale={20} />
                </RigidBody>
              </Stage>

              {activeToppings.map((topping, index) => (
                <Topping
                  key={index}
                  model={topping.model}
                  onRemove={() => removeTopping(topping.model)}
                />
              ))}
            </Physics>
          </Canvas>
        </div>

        <form ref={formRef} className="checkbox-container" onSubmit={e => handleOrder(e)}>
          <h2>Customize Your Pizza</h2>
          <h4>Add Toppings</h4>
          <div className="checkbox-list">
            {toppingsData.map((topping) => (
              <div key={topping.name} className="checkbox-item" onClick={() => OnHandleClick(topping.name)}>
                <input
                  type="checkbox"
                  id={topping.name}
                  onChange={(e) => handleToppingChange(topping.model, e.target.checked)}
                />
                <label htmlFor={topping.name}>{topping.name}</label>
              </div>
            ))}
          </div>
          <div className="menu-div" style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
            <div className="" style={{display: 'flex', justifyContent: "space-between", alignItems: "center", gap: "20px"}}>

          <div className="">
          <h3 style={{textAlign: 'center'}}>Quantity</h3>
          <div className="quantity">
            <button style={{background: "orange", color: "white"}} onClick={handleQuantityReduce}>-</button>
            <p>{quantity}</p>
            <button style={{background: "green", color: "white"}} onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
        </div>
        <div className="size">
        <h3 style={{textAlign: 'center'}}>Size</h3>
            <select value={size} onChange={(e) => setSize(e.target.value)} style={{width: "100%", padding: "10px", borderRadius: "5px"}}>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
            </div>
          <button style={{padding: "15px 20px"}} className="add-to-cart-btn" type="submit">
        Add to cart
      </button>
          </div>
        </form>
      </div>
    </>
  );
};

const Topping = ({ model, onRemove }) => {
  const toppingModel = useLoader(GLTFLoader, model, (loader) => {
    loader.manager.onError = (url) => console.error(`There was an issue loading ${url}`);
  });

  return (
    <RigidBody colliders="hull">
      <primitive object={toppingModel.scene} scale={2} onClick={onRemove} />
    </RigidBody>
  );
};

export default Customization;