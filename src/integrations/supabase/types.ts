export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      audit_media: {
        Row: {
          audit_id: string
          caption: string | null
          created_at: string | null
          id: string
          media_type: string
          media_url: string
        }
        Insert: {
          audit_id: string
          caption?: string | null
          created_at?: string | null
          id?: string
          media_type: string
          media_url: string
        }
        Update: {
          audit_id?: string
          caption?: string | null
          created_at?: string | null
          id?: string
          media_type?: string
          media_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_media_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "verified_dining_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_responses: {
        Row: {
          audit_id: string
          category: string
          created_at: string | null
          id: string
          notes: string | null
          question: string
          rating: number | null
          response: string | null
        }
        Insert: {
          audit_id: string
          category: string
          created_at?: string | null
          id?: string
          notes?: string | null
          question: string
          rating?: number | null
          response?: string | null
        }
        Update: {
          audit_id?: string
          category?: string
          created_at?: string | null
          id?: string
          notes?: string | null
          question?: string
          rating?: number | null
          response?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audit_responses_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "verified_dining_audits"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string
          content: string
          created_at: string | null
          excerpt: string | null
          id: string
          meta_description: string | null
          published_at: string | null
          slug: string
          status: string | null
          tags: string[] | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          published_at?: string | null
          slug: string
          status?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string | null
          excerpt?: string | null
          id?: string
          meta_description?: string | null
          published_at?: string | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      restaurant_offers: {
        Row: {
          created_at: string
          description: string
          discount_value: string
          id: string
          restaurant_id: string | null
          status: string | null
          terms_conditions: string | null
          title: string
          valid_from: string
          valid_until: string | null
        }
        Insert: {
          created_at?: string
          description: string
          discount_value: string
          id?: string
          restaurant_id?: string | null
          status?: string | null
          terms_conditions?: string | null
          title: string
          valid_from?: string
          valid_until?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          discount_value?: string
          id?: string
          restaurant_id?: string | null
          status?: string | null
          terms_conditions?: string | null
          title?: string
          valid_from?: string
          valid_until?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_offers_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurant_pages: {
        Row: {
          created_at: string
          custom_css: Json | null
          custom_url: string | null
          description: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          page_title: string
          restaurant_id: string
          theme_color: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          custom_css?: Json | null
          custom_url?: string | null
          description?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          page_title: string
          restaurant_id: string
          theme_color?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          custom_css?: Json | null
          custom_url?: string | null
          description?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          page_title?: string
          restaurant_id?: string
          theme_color?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "restaurant_pages_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      restaurants: {
        Row: {
          address: string
          average_rating: number | null
          cover_photo_url: string | null
          created_at: string
          cuisine_type: string[] | null
          description: string | null
          google_maps_url: string | null
          id: string
          logo_url: string | null
          name: string
          owner_id: string | null
          price_range: string | null
          slug: string
          status: string | null
        }
        Insert: {
          address: string
          average_rating?: number | null
          cover_photo_url?: string | null
          created_at?: string
          cuisine_type?: string[] | null
          description?: string | null
          google_maps_url?: string | null
          id?: string
          logo_url?: string | null
          name: string
          owner_id?: string | null
          price_range?: string | null
          slug: string
          status?: string | null
        }
        Update: {
          address?: string
          average_rating?: number | null
          cover_photo_url?: string | null
          created_at?: string
          cuisine_type?: string[] | null
          description?: string | null
          google_maps_url?: string | null
          id?: string
          logo_url?: string | null
          name?: string
          owner_id?: string | null
          price_range?: string | null
          slug?: string
          status?: string | null
        }
        Relationships: []
      }
      review_pages: {
        Row: {
          active: boolean | null
          background_image_url: string | null
          created_at: string
          id: string
          logo_url: string | null
          page_title: string
          restaurant_id: string
          thank_you_message: string | null
          theme_color: string | null
          updated_at: string
          welcome_message: string | null
        }
        Insert: {
          active?: boolean | null
          background_image_url?: string | null
          created_at?: string
          id?: string
          logo_url?: string | null
          page_title: string
          restaurant_id: string
          thank_you_message?: string | null
          theme_color?: string | null
          updated_at?: string
          welcome_message?: string | null
        }
        Update: {
          active?: boolean | null
          background_image_url?: string | null
          created_at?: string
          id?: string
          logo_url?: string | null
          page_title?: string
          restaurant_id?: string
          thank_you_message?: string | null
          theme_color?: string | null
          updated_at?: string
          welcome_message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "review_pages_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          business_name: string
          created_at: string
          id: string
          photo_url: string | null
          review_text: string
          server_name: string | null
          status: string | null
          unique_code: string
        }
        Insert: {
          business_name: string
          created_at?: string
          id?: string
          photo_url?: string | null
          review_text: string
          server_name?: string | null
          status?: string | null
          unique_code: string
        }
        Update: {
          business_name?: string
          created_at?: string
          id?: string
          photo_url?: string | null
          review_text?: string
          server_name?: string | null
          status?: string | null
          unique_code?: string
        }
        Relationships: []
      }
      saved_plans: {
        Row: {
          coach_personality: Json | null
          content: string
          created_at: string
          id: string
          service: string
          status: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          coach_personality?: Json | null
          content: string
          created_at?: string
          id?: string
          service: string
          status?: string | null
          title: string
          type: string
          user_id: string
        }
        Update: {
          coach_personality?: Json | null
          content?: string
          created_at?: string
          id?: string
          service?: string
          status?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      secrets: {
        Row: {
          created_at: string
          id: string
          name: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      verified_dining_audits: {
        Row: {
          created_at: string | null
          id: string
          restaurant_id: string
          reviewer_id: string | null
          status: Database["public"]["Enums"]["audit_status"] | null
          updated_at: string | null
          visit_date: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          restaurant_id: string
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          updated_at?: string | null
          visit_date?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          restaurant_id?: string
          reviewer_id?: string | null
          status?: Database["public"]["Enums"]["audit_status"] | null
          updated_at?: string | null
          visit_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "verified_dining_audits_restaurant_id_fkey"
            columns: ["restaurant_id"]
            isOneToOne: false
            referencedRelation: "restaurants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "verified_dining_audits_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_unique_url: {
        Args: {
          title: string
        }
        Returns: string
      }
    }
    Enums: {
      audit_status: "pending" | "in_progress" | "completed" | "cancelled"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
