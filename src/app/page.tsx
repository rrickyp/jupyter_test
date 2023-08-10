'use client';
import styles from './page.module.css'
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Cell, Jupyter } from "@datalayer/jupyter-react";
import { useEffect } from 'react';
import React from 'react';
const code = `import numpy as np
import matplotlib.pyplot as plt

# Define the function P(Q) = 100Q - Q^2
def P(Q):
    return 100 * Q - Q**2

# Define the derivative P'(Q) = 100 - 2Q
def P_prime(Q):
    return 100 - 2 * Q

# Generate a range of values for Q
Q_values = np.linspace(0, 100, 100)  # Choose any suitable range here

# Calculate the corresponding values of P(Q) and P'(Q)
P_values = P(Q_values)
P_prime_values = P_prime(Q_values)

# Plot the graph of P(Q)
plt.plot(Q_values, P_values, label='P(Q) = 100Q - Q^2')

# Calculate the tangent line equation at Q = 3
a = 3
tangent_line = P(a) + P_prime(a) * (Q_values - a)

# Plot the tangent line
plt.plot(Q_values, tangent_line, label='Tangent line at Q = 3', linestyle='dashed')

# Highlight Q = 3 on the graph
plt.scatter(a, P(a), color='red', label='Q = 3')

plt.xlabel('Q')
plt.ylabel('P(Q)')
plt.title('Graph of P(Q) and Tangent Line at Q = 3')
plt.legend()
plt.grid(True)

# plt.show()`
export default function Home() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    if(!isLoaded) {
      setIsLoaded(true);
  if(document.getElementById("root") != null) {
    setIsLoaded(true);
  createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Jupyter>
      <div>A Jupyter Cells</div>
      <Cell source={code}/>
    </Jupyter>
  </StrictMode>

);

  }
    }
  });
  return (
    <main className={styles.main}>
      <div className={styles.description} id="root">
      </div>
    </main>
  )
}
