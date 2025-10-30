"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { assets, doctors } from "@/assets/assets_frontend/assets";
import Image from "next/image";
import Button from "@/components/Button";
import RelatedDoctors from "@/components/RelatedDoctors";

interface Doctor {
  _id: string;
  name: string;
  image: any;
  speciality: string;
  degree: string;
  experience: string;
  about: string;
  fees: number;
  address: { line1: string; line2: string };
}

type Slot = { datetime: Date; time: string };

const PRIMARY = "#5F71FF";

const Page = () => {
  const { docId } = useParams<{ docId: string }>();
  const [docInfo, setDocInfo] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  // slots[dayIndex] = Slot[]
  const [docSlots, setDocSlots] = useState<Slot[][]>([]);
  const [slotIndex, setSlotIndex] = useState(0); // selected day
  const [slotTime, setSlotTime] = useState<string>(""); // selected time label

  // --- time formatter to match Figma (e.g., "9.00 am")
  const fmtTime = (d: Date) => {
    const raw = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }); // "09:00 AM"
    return raw
      .replace(/^0/, "") // drop leading 0
      .replace(":", ".") // colon → dot
      .replace(/\s?AM/i, " am")
      .replace(/\s?PM/i, " pm");
  };

  // --- Build 7 days of slots, 30-min interval, 10:00 → 21:00
  const buildAvailableSlots = () => {
    const now = new Date();
    const results: Slot[][] = [];

    for (let i = 0; i < 7; i++) {
      const day = new Date();
      day.setHours(0, 0, 0, 0);
      day.setDate(day.getDate() + i);

      const start = new Date(day);
      if (i === 0) {
        // For today: start at next half-hour, but not earlier than 10:00
        const next = new Date(now);
        const m = next.getMinutes();
        if (m !== 0 && m !== 30) {
          next.setMinutes(m < 30 ? 30 : 60, 0, 0);
        } else {
          next.setSeconds(0, 0);
        }
        const tenAM = new Date(day);
        tenAM.setHours(10, 0, 0, 0);
        start.setTime(Math.max(next.getTime(), tenAM.getTime()));
      } else {
        // Future days: start 10:00
        start.setHours(10, 0, 0, 0);
      }

      const end = new Date(day);
      end.setHours(21, 0, 0, 0); // exclusive

      const daySlots: Slot[] = [];
      while (start < end) {
        daySlots.push({ datetime: new Date(start), time: fmtTime(start) });
        start.setMinutes(start.getMinutes() + 30);
      }
      results.push(daySlots);
    }

    setDocSlots(results);

    // sensible default selection
    const firstWithSlots = results.findIndex((arr) => arr.length > 0);
    if (firstWithSlots !== -1) {
      setSlotIndex(firstWithSlots);
      setSlotTime(results[firstWithSlots][0].time);
    } else {
      setSlotIndex(0);
      setSlotTime("");
    }
  };

  // simulate fetch + show loader for 2s (adjust if you like)
  useEffect(() => {
    const t = setTimeout(() => {
      const info = doctors.find((doc) => doc._id === docId);
      setDocInfo(info || null);
      setLoading(false);
    }, 2000);
    return () => clearTimeout(t);
  }, [docId]);

  // build slots once on mount
  useEffect(() => {
    buildAvailableSlots();
  }, []);

  // Day labels for header
  const dayLabels = useMemo(() => {
    const arr: { weekday: string; date: number }[] = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      arr.push({
        weekday:
          i === 0
            ? "TODAY"
            : d.toLocaleDateString([], { weekday: "short" }).toUpperCase(),
        date: d.getDate(),
      });
    }
    return arr;
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white">
        <div
          className="w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
          style={{ borderColor: PRIMARY, borderTopColor: "transparent" }}
        />
      </div>
    );
  }

  return (
    <div className="px-2 lg:px-16 xl:px-28 py-6">
      <div className="flex flex-col sm:flex-row gap-6 ">
        {/* Left: Doctor photo */}
        <div className="shrink-0">
          <div
            className="rounded-xl overflow-hidden"
            style={{ backgroundColor: PRIMARY }}
          >
            {/* Provide width/height for Next Image to avoid layout shift */}
            <Image
              src={docInfo?.image}
              alt="Doctor"
              width={288}
              height={288}
              className="w-full sm:w-72 h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Card + Booking */}

        <div className="flex-1 border flex-col border-gray-200 rounded-2xl p-6 bg-white">
          {/* Header */}
          <div className="flex items-start justify-between">
            <h2 className="flex items-center gap-2 text-2xl font-semibold text-gray-900">
              {docInfo?.name}
              <Image
                src={assets.verified_icon}
                alt="Verified"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </h2>
          </div>

          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>
              {docInfo?.degree} - {docInfo?.speciality}
            </p>
            <Button
              text={docInfo?.experience || "5 Year"}
              classStyle="py-0 px-6 hover:bg-[#5F71FF] hover:text-white"
            />
          </div>

          {/* About */}
          <div className="mt-3">
            <p className="flex items-center gap-1 text-sm font-medium text-gray-500">
              About{" "}
              <Image
                src={assets.info_icon}
                alt="About"
                width={16}
                height={16}
              />
            </p>
            <p className="text-sm text-gray-600 max-w-[740px] mt-1">
              {docInfo?.about}
            </p>
          </div>

          {/* Fee */}
          <p className="text-gray-700 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-900">${docInfo?.fees}</span>
          </p>
        </div>
      </div>
      <div className="ml-0 lg:ml-80">
        {/* Booking Slots */}
        <div className="mt-6 sm:mt-8 max-w-4xl">
          <h3 className="text-base sm:text-lg font-semibold text-gray-700">
            Booking slots
          </h3>

          {/* Day chips row */}
          <div className="mt-4 -mx-4 sm:mx-0">
            <div
              className="
          flex gap-3 sm:gap-4 overflow-x-auto pb-3 sm:pb-2 px-4 sm:px-0
          snap-x snap-mandatory scroll-p-4
          mask-[linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]
          sm:mask-none
        "
              role="listbox"
              aria-label="Choose a day"
            >
              {dayLabels.map((d, idx) => {
                const isActive = idx === slotIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setSlotIndex(idx);
                      const first = docSlots[idx]?.[0]?.time ?? "";
                      setSlotTime(first);
                    }}
                    className={`
                relative shrink-0 snap-start
                w-[76px] h-[92px] sm:w-[84px] sm:h-[110px]
                rounded-2xl border flex items-center justify-center text-center transition-all
                focus:outline-none focus:ring-2 focus:ring-offset-2 mt-2 ml-2
              `}
                    style={{
                      backgroundColor: isActive ? PRIMARY : "#FFFFFF",
                      borderColor: isActive ? PRIMARY : "#E7E7E9",
                      color: isActive ? "#FFFFFF" : "#374151",
                    }}
                    aria-selected={isActive}
                    role="option"
                  >
                    <div className="leading-tight">
                      <div
                        className={isActive ? "text-white/90" : "text-gray-500"}
                      >
                        <span className="text-[11px] sm:text-[12px] tracking-[0.08em]">
                          {d.weekday}
                        </span>
                      </div>
                      <div className="mt-1">
                        <span className="text-[18px] sm:text-[22px] font-semibold">
                          {d.date}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time pills */}
          <div className="mt-5 grid grid-template gap-2 sm:gap-3">
            {/* 2 columns on small, 3 on md, auto-wrap on larger */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {docSlots[slotIndex]?.length ? (
                docSlots[slotIndex].map((slot, i) => {
                  const active = slot.time === slotTime;
                  return (
                    <button
                      key={i}
                      onClick={() => setSlotTime(slot.time)}
                      className="px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] transition-all border text-center"
                      style={{
                        backgroundColor: active ? PRIMARY : "#FFFFFF",
                        color: active ? "#FFFFFF" : "#1F2937",
                        borderColor: active ? PRIMARY : "#E7E7E9",
                      }}
                    >
                      {slot.time}
                    </button>
                  );
                })
              ) : (
                <p className="col-span-full text-sm text-gray-500">
                  No slots available
                </p>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 sm:mt-8">
            <button
              disabled={!slotTime}
              className="
          w-full sm:w-auto sm:min-w-[280px] md:min-w-[320px]
          rounded-full px-6 py-4 text-white text-[15px] sm:text-[16px] font-medium transition-all
          disabled:cursor-not-allowed
        "
              style={{
                backgroundColor: PRIMARY,
                opacity: slotTime ? 1 : 0.6,
              }}
              onClick={() => {
                // handle booking here
                // const selected = docSlots[slotIndex].find(s => s.time === slotTime)?.datetime;
              }}
            >
              Book an appointment
            </button>
          </div>
        </div>
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo?.speciality} />
    </div>
  );
};

export default Page;
