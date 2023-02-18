import React from "react";

import { BASE_IMG_URL } from "~/lib/themoviedb";
import Avatar1 from "~/assets/avatar-1.svg";
import Avatar2 from "~/assets/avatar-2.svg";
import Avatar3 from "~/assets/avatar-3.svg";
import Avatar4 from "~/assets/avatar-4.svg";
import Avatar5 from "~/assets/avatar-5.svg";
import Star from "~/assets/star.svg";

const AVATARS = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

const Reviews = ({ reviews }) => {
  const avatarFallback = (e) =>
    (e.target.src = AVATARS[Math.floor(Math.random() * AVATARS.length)]);

  return (
    <div className="grid gap-8 overflow-y-scroll">
      {reviews.results.map((review) => (
        <div className="p-6 bg-slate-900 rounded-lg" key={review.id}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src={`${BASE_IMG_URL}/w185${review.author_details.avatar_path}`}
                onError={avatarFallback}
                className="w-1/6 mr-4"
              />

              <div>
                <div className="font-medium">
                  {review.author_details.username}
                </div>
                {review.author_details.rating && (
                  <div className="flex items-center">
                    <img className="w-4 mr-" src={Star} />
                    <div className="font-medium">
                      {review.author_details.rating}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="text-gray-500 text-sm">
              {new Date(review.created_at).toLocaleDateString()}
            </div>
          </div>
          <p className="text-gray-400 leading-relaxed whitespace-pre-wrap">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
