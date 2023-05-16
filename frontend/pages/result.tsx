import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";
import { ParsedUrlQuery } from "node:querystring";
import useSWR from "swr";
import Layout from "@/components/layout";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/constants";
import PhotoBooth from "@/components/home/photo-booth";
import { getPlaiceholder } from "plaiceholder";
import { useUploadModal } from "@/components/home/upload-modal";
import { Upload } from "lucide-react";
import { Toaster } from "react-hot-toast";

export default function PhotoPage() {
  const router = useRouter();
  const { result, input } = router.query;
//   const { data } = useSWR<DataProps>(`/api/images/${id}`, fetcher, {
//     fallbackData,
//     refreshInterval: fallbackData.output || fallbackData.expired ? 0 : 500,
//     refreshWhenHidden: true,
//   });
  const { UploadModal, setShowUploadModal } = useUploadModal();

  return (
    <Layout>
      <Toaster />
      <motion.div
        className="z-10 max-w-2xl px-5 xl:px-0"
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.h1
          className="animate-text bg-gradient-to-r from-white from-40% via-gray-300 via-[20%] to-white to-50% bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          Your Results
        </motion.h1>
        <motion.p
          className="mt-6 text-center text-gray-500 md:text-xl"
          variants={FADE_DOWN_ANIMATION_VARIANTS}
        >
          <Balancer ratio={0.6} className="text-white">
            Please note that this is not a medical diagnosis.
            In case of any doubt, please consult a doctor.
          </Balancer>
        </motion.p>
        
          <PhotoBooth
            result={result || "Error"}
            input = {input || "Error"}
          />

      </motion.div>
    </Layout>
  );
}
