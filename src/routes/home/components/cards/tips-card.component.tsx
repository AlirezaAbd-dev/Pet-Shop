import Icon from '@/components/icon';

import SvgCalendarDates from '@icons/calendar-dates.svg';

import { Blog } from '../..';

type TipCardProps = Blog;

const BlogCard = (props: TipCardProps) => {
  return (
    <a
      href={props.link}
      className="flex flex-col items-start rounded-2xl md:rounded-3xl border border-nature-800 p-4"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-full md:rounded-2xl h-[180px] md:h-[210px] object-center"
      />
      <span className="flex gap-1 mt-3 bg-primary-50/5 text-primary-500 px-2 py-1 rounded-[50px] md:font-semibold">
        <Icon>
          <SvgCalendarDates className="w-5 h-5" />
        </Icon>
        {new Date(props.date).toLocaleDateString('en-us', {
          dateStyle: 'long',
        })}
      </span>
      <p className="font-nunito font-bold md:text-xl mt-4">{props.title}</p>
      <p className="text-sm md:text-base mt-3">{props.description}</p>
    </a>
  );
};

export default BlogCard;
