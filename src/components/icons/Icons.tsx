import * as LucideIcons from "lucide-react";
import { memo } from "react";

type TIconProps = {
  name: keyof typeof LucideIcons;
  color?: string;
  size?: number;
};

const Icon = memo(function Icon(props: TIconProps) {
  const { name, color, size } = props;

  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.error(`Icon "${name}" not found`);
    return null;
  }

  return <IconComponent color={color} size={size} />;
});

export default Icon;
