import { motion } from "framer-motion";

const plans = [
  { name: "Basic", price: "$39", desc: "Gym access, locker room" },
  { name: "Pro", price: "$69", desc: "Gym, group training, sauna" },
  { name: "Elite", price: "$119", desc: "All access, PT, nutrition" }
];

export default function Plans() {
  return (
    <section className="section">
      <h2>Membership Plans</h2>
      <div className="grid">
        {plans.map((p, i) => (
          <motion.div
            className="card"
            key={p.name}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3>{p.name}</h3>
            <p className="price">{p.price}/month</p>
            <span>{p.desc}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
