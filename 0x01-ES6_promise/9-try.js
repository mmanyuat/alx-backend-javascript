/**
 * Function to handle execution of a mathematical function and append results or errors to a queue.
 *
 * @param {Function} mathFunction - The function to execute.
 * @returns {Array} queue - Array with the result of mathFunction or error,guardrail message.
 */
export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction(); // Try executing the math function
    queue.push(result); // Add the result to the queue
  } catch (error) {
    queue.push(`Error: ${error.message}`); // Add the error message to the queue
  }
  queue.push('Guardrail was processed'); // Always add this message to the queue
  return queue;
}
