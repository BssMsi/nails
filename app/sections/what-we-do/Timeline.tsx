"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import ExpandableCard from "./ExpandableCard";
import Modal from "../../components/Modal";

interface TimelineItem {
  title: string;
  description: string;
  year: string;
  impact: string;
}

export default function Timeline({
  items,
  className,
}: {
  items: TimelineItem[];
  className?: string;
}) {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMore = (item: TimelineItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

      {/* Timeline Items */}
      <div className="relative">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={cn(
              "flex items-center mb-12",
              idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
            )}
          >
            {/* Timeline Content */}
            <div className="w-1/2 px-4">
              <div className="flex justify-center">
                <ExpandableCard
                  title={item.title}
                  year={item.year}
                  onReadMore={() => handleReadMore(item)}
                />
              </div>
            </div>

            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900" />

            {/* Empty Space for the other side */}
            <div className="w-1/2" />
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded content */}
      {isModalOpen && selectedItem && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{selectedItem.year}</p>
          <p className="mb-4">{selectedItem.description}</p>
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Impact:</h4>
            <p>{selectedItem.impact}</p>
          </div>
        </Modal>
      )}
    </div>
  );
}