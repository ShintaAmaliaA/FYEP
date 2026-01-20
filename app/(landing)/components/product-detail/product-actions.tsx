"use client";

import {
  FiArrowRight,
  FiChevronDown,
  FiChevronUp,
  FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ProductActions = () => {
  const { push } = useRouter();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden h-11">
        <div className="w-12 text-center text-sm font-medium">
          {qty}
        </div>
        <div className="flex flex-col border-l border-gray-300">
          <button
            onClick={() => setQty(qty + 1)}
            className="h-5 w-6 flex items-center justify-center hover:bg-gray-100 transition"
          >
            <FiChevronUp size={14} />
          </button>
          <button
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
            className="h-5 w-6 flex items-center justify-center hover:bg-gray-100 transition"
            disabled={qty === 1}
          >
            <FiChevronDown size={14} />
          </button>
        </div>
      </div>

      <Button className="px-6 py-3 text-sm gap-2">
        <FiShoppingBag size={16} />
        Add to Cart
      </Button>

      <Button
        variant="dark"
        className="px-6 py-3 text-sm gap-2"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={16} />
      </Button>
    </div>
  );
};

export default ProductActions;
