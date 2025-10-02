import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface ProductFilters {
  categories: string[];
  colourTones: string[];
  patterns: string[];
  thicknesses: number[];
  widthRanges: string[];
  finishes: string[];
  underfloorHeating: boolean | null;
  stockOnly: boolean;
  priceRange: [number, number];
}

interface FilterDrawerProps {
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
  onReset: () => void;
  isMobile?: boolean;
}

export const FilterDrawer = ({
  filters,
  onFiltersChange,
  onReset,
  isMobile = false,
}: FilterDrawerProps) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const categories = ["Solid Wood", "Engineered Wood", "Laminate", "Parquet"];
  const colourTones = ["Natural Oak", "Smoked Oak", "Walnut", "Maple", "Grey", "White", "Dark"];
  const patterns = ["Plank", "Herringbone", "Chevron", "Versailles"];
  const thicknesses = [10, 12, 14, 15, 16, 18, 20];
  const widthRanges = ["≤120mm", "121-160mm", "161-220mm", "220mm+"];
  const finishes = ["Oiled", "Lacquered", "Brushed", "Matte", "Satin"];

  const handleArrayToggle = (key: keyof ProductFilters, value: string | number) => {
    const currentArray = localFilters[key] as any[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item) => item !== value)
      : [...currentArray, value];
    setLocalFilters({ ...localFilters, [key]: newArray });
  };

  const handleApply = () => {
    onFiltersChange(localFilters);
  };

  const FilterContent = () => (
    <ScrollArea className="h-full pr-4">
      <div className="space-y-6 pb-6">
        {/* Category */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Category</h3>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center space-x-2">
                <Checkbox
                  id={`cat-${cat}`}
                  checked={localFilters.categories.includes(cat)}
                  onCheckedChange={() => handleArrayToggle("categories", cat)}
                />
                <Label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">
                  {cat}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Colour Tone */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Colour Tone</h3>
          <div className="space-y-2">
            {colourTones.map((tone) => (
              <div key={tone} className="flex items-center space-x-2">
                <Checkbox
                  id={`tone-${tone}`}
                  checked={localFilters.colourTones.includes(tone)}
                  onCheckedChange={() => handleArrayToggle("colourTones", tone)}
                />
                <Label htmlFor={`tone-${tone}`} className="text-sm cursor-pointer">
                  {tone}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Pattern */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Pattern/Format</h3>
          <div className="space-y-2">
            {patterns.map((pattern) => (
              <div key={pattern} className="flex items-center space-x-2">
                <Checkbox
                  id={`pattern-${pattern}`}
                  checked={localFilters.patterns.includes(pattern)}
                  onCheckedChange={() => handleArrayToggle("patterns", pattern)}
                />
                <Label htmlFor={`pattern-${pattern}`} className="text-sm cursor-pointer">
                  {pattern}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Thickness */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Thickness</h3>
          <div className="space-y-2">
            {thicknesses.map((thickness) => (
              <div key={thickness} className="flex items-center space-x-2">
                <Checkbox
                  id={`thick-${thickness}`}
                  checked={localFilters.thicknesses.includes(thickness)}
                  onCheckedChange={() => handleArrayToggle("thicknesses", thickness)}
                />
                <Label htmlFor={`thick-${thickness}`} className="text-sm cursor-pointer">
                  {thickness}mm
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Width */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Width</h3>
          <div className="space-y-2">
            {widthRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={`width-${range}`}
                  checked={localFilters.widthRanges.includes(range)}
                  onCheckedChange={() => handleArrayToggle("widthRanges", range)}
                />
                <Label htmlFor={`width-${range}`} className="text-sm cursor-pointer">
                  {range}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Finish */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Finish</h3>
          <div className="space-y-2">
            {finishes.map((finish) => (
              <div key={finish} className="flex items-center space-x-2">
                <Checkbox
                  id={`finish-${finish}`}
                  checked={localFilters.finishes.includes(finish)}
                  onCheckedChange={() => handleArrayToggle("finishes", finish)}
                />
                <Label htmlFor={`finish-${finish}`} className="text-sm cursor-pointer">
                  {finish}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Underfloor Heating */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Compatibility</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="ufh-yes"
                checked={localFilters.underfloorHeating === true}
                onCheckedChange={(checked) =>
                  setLocalFilters({
                    ...localFilters,
                    underfloorHeating: checked ? true : null,
                  })
                }
              />
              <Label htmlFor="ufh-yes" className="text-sm cursor-pointer">
                Underfloor heating compatible
              </Label>
            </div>
          </div>
        </div>

        {/* Stock */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">Availability</h3>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="stock-only"
              checked={localFilters.stockOnly}
              onCheckedChange={(checked) =>
                setLocalFilters({ ...localFilters, stockOnly: checked as boolean })
              }
            />
            <Label htmlFor="stock-only" className="text-sm cursor-pointer">
              In Stock Only
            </Label>
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-heading font-semibold text-sm mb-3">
            Price per m² (£{localFilters.priceRange[0]} - £{localFilters.priceRange[1]})
          </h3>
          <Slider
            min={0}
            max={150}
            step={5}
            value={localFilters.priceRange}
            onValueChange={(value) =>
              setLocalFilters({ ...localFilters, priceRange: value as [number, number] })
            }
            className="mt-4"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button onClick={handleApply} className="flex-1">
            Apply Filters
          </Button>
          <Button onClick={onReset} variant="outline" className="flex-1">
            Reset
          </Button>
        </div>
      </div>
    </ScrollArea>
  );

  if (isMobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="sm">
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Filter Products</SheetTitle>
          </SheetHeader>
          <div className="mt-6">
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="w-64 bg-card rounded-lg p-6 soft-shadow sticky top-24 h-fit">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading font-bold text-lg">Filters</h2>
      </div>
      <FilterContent />
    </div>
  );
};
