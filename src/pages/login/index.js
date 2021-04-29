import { useState } from "react";
import Container from "../../components/container";
import MidBox from "../../components/alignment/midBox";
import Heading from "../../components/typography/heading";
import { DOMAIN } from "../../store/utils";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors([]);
    axios({
      method: "POST",
      url: `${DOMAIN}/auth/login/`,
      data: {
        email,
        password,
      },
      withCredentials: true
    })
      .then((res) => {
        setLoading(false);
        console.log(res.headers);
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        try {
          err = JSON.parse(err.request.response);
          console.log(err);
          setErrors([...errors, err]);
        }
        catch{
          console.log(err.request);
        }
      });
  };

  return (
    <Container maxWidth="xs">
      <MidBox height="70vh">
        <Heading title={"Login"} h={8} />
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ul>
            {errors &&
              errors.map((error, index) => (
                <li key={index}>{JSON.stringify(error)}</li>
              ))}
          </ul>
          <button disabled={loading} type="submit">Login</button>
        </form>
      </MidBox>
    </Container>
  );
}
